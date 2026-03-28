const scenarios = {
  cancun: {
    title: 'Viaje a Cancún',
    total: 'USD 4.670',
    ars: 'ARS 5.510.600 aprox.',
    route: 'Buenos Aires -> Cancún',
    dates: '15 Jul 2025 -> 22 Jul 2025 · 7 noches',
    travelers: '2 adultos',
    prices: {
      flight: 'USD 1.780',
      hotel: 'USD 2.240',
      activities: 'USD 310',
      taxes: 'USD 340',
      total: 'USD 4.670',
    },
    chat: [
      {
        role: 'user',
        text: 'Quiero descansar con mi pareja en una playa paradisíaca, sin pensar demasiado en la logística.',
      },
      {
        role: 'assistant',
        text: 'Te propongo Cancún con vuelo directo desde EZE, hotel all-inclusive frente al mar y dos actividades opcionales para equilibrar relax con experiencia local.',
      },
      {
        role: 'assistant',
        text: 'Armé una selección conservadora en presupuesto, pero con sensación premium. Abajo ves la cotización resumida.',
      },
    ],
    flight: {
      title: 'Aerolíneas Argentinas AR1162',
      body: 'Vuelo directo EZE -> CUN, equipaje incluido y regreso una semana después.',
      meta: ['Salida 06:30', 'Directo', '23 kg incluidos'],
    },
    hotel: {
      title: 'Grand Hyatt Cancún Resort',
      body: 'Suite junior vista al mar, desayuno incluido y amenities de resort.',
      meta: ['5 estrellas', 'Zona Hotelera', 'USD 320 / noche'],
    },
    activity: {
      title: 'Chichén Itzá + cenote sagrado',
      body: 'Día completo con guía, almuerzo y salida pensada para no romper la semana de descanso.',
      meta: ['Cultura', 'Día completo', 'USD 95 por persona'],
    },
  },
  maldivas: {
    title: 'Viaje a Maldivas',
    total: 'USD 24.192',
    ars: 'ARS 28.546.560 aprox.',
    route: 'Buenos Aires -> Malé',
    dates: '01 Ago 2025 -> 15 Ago 2025 · 14 noches',
    travelers: '2 adultos',
    prices: {
      flight: 'USD 4.400',
      hotel: 'USD 16.800',
      activities: 'USD 860',
      taxes: 'USD 2.132',
      total: 'USD 24.192',
    },
    chat: [
      {
        role: 'user',
        text: 'Busco una luna de miel realmente inolvidable. Prefiero pocas decisiones y máxima calidad.',
      },
      {
        role: 'assistant',
        text: 'En ese caso, Maldivas tiene sentido: vuelo con Emirates, villa premium con piscina privada y experiencias diseñadas para romance.',
      },
      {
        role: 'assistant',
        text: 'La propuesta prioriza exclusividad por sobre optimización de costo. La idea es que se sienta irrepetible.',
      },
    ],
    flight: {
      title: 'Emirates EK198',
      body: 'EZE -> MLE con una escala, tarifa estable y franquicia amplia de equipaje.',
      meta: ['1 escala', '30 kg incluidos', 'Trayecto largo premium'],
    },
    hotel: {
      title: 'One&Only Reethi Rah',
      body: 'Beach villa con piscina privada, butler 24h y experiencia de resort de ultra lujo.',
      meta: ['Resort de lujo', 'Atolón North Malé', 'USD 1.200 / noche'],
    },
    activity: {
      title: 'Cena en sandbank privado',
      body: 'Cena de cinco pasos al atardecer con traslado y ambientación especial.',
      meta: ['Romance', '3 horas', 'USD 350 por persona'],
    },
  },
  miami: {
    title: 'Viaje a Miami',
    total: 'USD 5.416',
    ars: 'ARS 6.390.880 aprox.',
    route: 'Buenos Aires -> Miami',
    dates: '15 Jul 2025 -> 22 Jul 2025 · 7 noches',
    travelers: '2 adultos',
    prices: {
      flight: 'USD 1.560',
      hotel: 'USD 3.360',
      activities: 'USD 310',
      taxes: 'USD 186',
      total: 'USD 5.416',
    },
    chat: [
      {
        role: 'user',
        text: 'Quiero ir a Miami con mi pareja, mezcla de playa, gastronomía y algo de cultura urbana.',
      },
      {
        role: 'assistant',
        text: 'Miami encaja perfecto: vuelo directo desde EZE con American Airlines, Fontainebleau en South Beach y una agenda que equilibra relax en la playa con el Distrito Art Deco y Little Havana.',
      },
      {
        role: 'assistant',
        text: 'Armé la selección priorizando ubicación y experiencia cultural. Abajo ves la cotización completa.',
      },
    ],
    flight: {
      title: 'American Airlines AA950',
      body: 'Vuelo directo EZE -> MIA, 9h 30m, equipaje de 23 kg incluido.',
      meta: ['Directo', '9h 30m', '23 kg incluidos'],
    },
    hotel: {
      title: 'Fontainebleau Miami Beach',
      body: 'Suite Ocean View en el icónico hotel de South Beach con acceso directo a la playa.',
      meta: ['5 estrellas', 'South Beach', 'USD 480 / noche'],
    },
    activity: {
      title: 'Tour Art Deco & District Walk',
      body: 'Recorrido guiado por el histórico barrio Art Deco de South Beach y Ocean Drive.',
      meta: ['Cultura', '3 horas', 'USD 45 por persona'],
    },
  },
  floripa: {
    title: 'Viaje a Florianópolis',
    total: 'USD 2.867',
    ars: 'ARS 3.383.060 aprox.',
    route: 'Buenos Aires -> Florianópolis',
    dates: '10 Jul 2025 -> 17 Jul 2025 · 7 noches',
    travelers: '2 adultos',
    prices: {
      flight: 'USD 560',
      hotel: 'USD 1.960',
      activities: 'USD 110',
      taxes: 'USD 237',
      total: 'USD 2.867',
    },
    chat: [
      {
        role: 'user',
        text: 'Quiero un viaje más accesible, con playa pero también algo de movimiento y buena gastronomía.',
      },
      {
        role: 'assistant',
        text: 'Florianópolis encaja bien: vuelo corto, resort sólido y actividades que mezclan surf suave con recorrido gastronómico local.',
      },
      {
        role: 'assistant',
        text: 'Es una propuesta con mejor relación precio-experiencia para compartir en una demo comercial.',
      },
    ],
    flight: {
      title: 'GOL G3 1204',
      body: 'Vuelo directo EZE -> FLN, bajo tiempo de viaje y equipaje incluido.',
      meta: ['Directo', '2h 15m', '23 kg incluidos'],
    },
    hotel: {
      title: 'Costão do Santinho Resort',
      body: 'Resort premium frente al mar con desayuno y acceso a playa privada.',
      meta: ['5 estrellas', 'Praia do Santinho', 'USD 280 / noche'],
    },
    activity: {
      title: 'Clase de surf en Praia Mole',
      body: 'Actividad corta, muy visible para la demo y alineada con el perfil aventura-playa.',
      meta: ['Aventura', '3 horas', 'USD 55 por persona'],
    },
  },
}

function renderScenario(key) {
  const scenario = scenarios[key]
  if (!scenario) return

  document.querySelectorAll('.switcher-button').forEach((button) => {
    button.classList.toggle('active', button.dataset.destination === key)
  })

  document.getElementById('quote-title').textContent = scenario.title
  document.getElementById('quote-total').textContent = scenario.total
  document.getElementById('quote-ars').textContent = scenario.ars
  document.getElementById('summary-route').textContent = scenario.route
  document.getElementById('summary-dates').textContent = scenario.dates
  document.getElementById('summary-travelers').textContent = scenario.travelers

  document.getElementById('price-flight').textContent = scenario.prices.flight
  document.getElementById('price-hotel').textContent = scenario.prices.hotel
  document.getElementById('price-activities').textContent = scenario.prices.activities
  document.getElementById('price-taxes').textContent = scenario.prices.taxes
  document.getElementById('price-total').textContent = scenario.prices.total

  document.getElementById('chat-thread').innerHTML = scenario.chat
    .map((message) => `<div class="bubble ${message.role}">${message.text}</div>`)
    .join('')

  document.getElementById('flight-card').innerHTML = renderCard(
    'Vuelo seleccionado',
    scenario.flight,
  )
  document.getElementById('hotel-card').innerHTML = renderCard('Alojamiento', scenario.hotel)
  document.getElementById('activity-card').innerHTML = renderCard(
    'Actividad destacada',
    scenario.activity,
  )
}

function renderCard(label, section) {
  return [
    `<p class="eyebrow">${label}</p>`,
    `<h4>${section.title}</h4>`,
    `<p>${section.body}</p>`,
    '<div class="selection-meta">',
    ...section.meta.map((item) => `<span class="meta-pill">${item}</span>`),
    '</div>',
  ].join('')
}

document.querySelectorAll('.switcher-button').forEach((button) => {
  button.addEventListener('click', () => {
    renderScenario(button.dataset.destination)
  })
})

renderScenario('cancun')
