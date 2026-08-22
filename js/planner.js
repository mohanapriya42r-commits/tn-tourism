/* ==========================================================================
   Tamil Nadu Tourism & Smart Trip Planner - Itinerary & Budget Algorithm Engine
   ========================================================================== */

function generateSmartTripPlan(formData) {
  const { source, destination, travelers, days, startDate, budget, budgetLevel, travelType, categories } = formData;

  // Filter places based on destination district and selected categories
  let availablePlaces = window.TN_DATA.places.filter(p => {
    const matchDistrict = !destination || p.district.toLowerCase().includes(destination.toLowerCase());
    const matchCategory = categories.length === 0 || categories.includes(p.category);
    return matchDistrict && matchCategory;
  });

  // If no places found matching exact criteria, fallback to destination district or all TN places
  if (availablePlaces.length === 0) {
    availablePlaces = window.TN_DATA.places.filter(p => !destination || p.district.toLowerCase().includes(destination.toLowerCase()));
  }
  if (availablePlaces.length === 0) {
    availablePlaces = window.TN_DATA.places;
  }

  // Calculate day-wise itinerary
  const itinerary = [];
  let placeIdx = 0;

  for (let day = 1; day <= days; day++) {
    const mainPlace = availablePlaces[placeIdx % availablePlaces.length];
    placeIdx++;

    const secondaryPlace = availablePlaces[placeIdx % availablePlaces.length];
    placeIdx++;

    const hotel = mainPlace.hotels && mainPlace.hotels.length > 0 ? mainPlace.hotels[0] : { name: 'TN Tourism Hotel', price: '₹2,500/night' };
    const restaurant = mainPlace.restaurants && mainPlace.restaurants.length > 0 ? mainPlace.restaurants[0] : { name: 'Traditional South Indian Mess', foodType: 'South Indian Veg/Non-Veg' };

    itinerary.push({
      dayNumber: day,
      title: `Day ${day} – Exploring ${mainPlace.district}`,
      schedule: {
        morning: {
          time: '08:30 AM - 12:00 PM',
          placeName: mainPlace.name,
          category: mainPlace.categoryName,
          activity: `Guided tour of ${mainPlace.name}, exploring attractions: ${mainPlace.attractions.slice(0, 2).join(', ')}.`,
          distance: `${12 + (day * 4)} km from ${day === 1 ? source : 'hotel'}`,
          travelTime: '25-35 mins'
        },
        afternoon: {
          time: '01:00 PM - 04:30 PM',
          lunchSpot: restaurant.name,
          lunchType: restaurant.foodType,
          placeName: secondaryPlace.name !== mainPlace.name ? secondaryPlace.name : 'Local Craft Bazaars & Viewpoints',
          activity: `Delicious traditional lunch at ${restaurant.name}, followed by visit to ${secondaryPlace.name !== mainPlace.name ? secondaryPlace.name : 'heritage spots'}.`,
          travelTime: '15-20 mins'
        },
        evening: {
          time: '05:00 PM - 07:30 PM',
          activity: `Sunset stroll, shopping for authentic Tamil Nadu handlooms, handicrafts, and local snacks.`,
          recommendedSpot: `${mainPlace.district} Town Square & Cultural Market`
        },
        night: {
          time: '08:30 PM Onwards',
          dinner: `Dinner & Night stay at ${hotel.name}.`,
          hotelName: hotel.name,
          hotelRate: hotel.price
        }
      }
    });
  }

  // Cost Budget Math Engine
  let baseHotelPerNight = 2500;
  if (budgetLevel === 'low') baseHotelPerNight = 1200;
  if (budgetLevel === 'high') baseHotelPerNight = 6000;

  const totalHotelCost = baseHotelPerNight * days;
  const foodCostPerDayPerPerson = budgetLevel === 'low' ? 350 : (budgetLevel === 'high' ? 900 : 500);
  const totalFoodCost = foodCostPerDayPerPerson * travelers * days;
  
  const transportRatePerDay = travelType === 'solo' ? 400 : (travelType === 'family' || travelType === 'group' ? 1800 : 1200);
  const totalTransportCost = transportRatePerDay * days;
  
  const ticketFeePerPerson = 120 * days;
  const totalTicketCost = ticketFeePerPerson * travelers;

  const miscExpenses = 500 * days;

  const totalEstimatedCost = totalHotelCost + totalFoodCost + totalTransportCost + totalTicketCost + miscExpenses;

  // Comparison
  const userNumBudget = parseFloat(budget) || 10000;
  const fitsBudget = totalEstimatedCost <= userNumBudget;

  return {
    source,
    destination: destination || 'Tamil Nadu Highlights',
    travelers,
    days,
    startDate,
    travelType,
    itinerary,
    costs: {
      transport: totalTransportCost,
      hotel: totalHotelCost,
      food: totalFoodCost,
      tickets: totalTicketCost,
      misc: miscExpenses,
      total: totalEstimatedCost,
      userBudget: userNumBudget,
      fitsBudget: fitsBudget
    }
  };
}

// Save trip plan to localStorage
function saveTripPlan(planData) {
  const savedTripsStr = localStorage.getItem('tn_saved_trips');
  const savedTrips = savedTripsStr ? JSON.parse(savedTripsStr) : [];
  
  planData.id = 'plan_' + Date.now();
  planData.createdAt = new Date().toISOString();

  savedTrips.push(planData);
  localStorage.setItem('tn_saved_trips', JSON.stringify(savedTrips));
  showToast('Trip Plan saved to your account profile!', 'success');
}
