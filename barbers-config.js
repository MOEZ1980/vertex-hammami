
/*
  VERTEX HAMMAMI
  Configurazione barbieri
  Preparazione per sistema multi-barbiere
*/

window.VERTEX_BARBERS = [
  {
    id: "barber_1",
    name: "HAMMAMI",
    active: true,
    availableForBooking: true
  },
  {
    id: "barber_2",
    name: "Barbiere 2",
    active: false,
    availableForBooking: false
  },
  {
    id: "barber_3",
    name: "Barbiere 3",
    active: false,
    availableForBooking: false
  }
];

window.VERTEX_BOOKING_OPTIONS = {
  chooseBarber: true,
  firstAvailable: true,
  requireAdminConfirmation: true,
  preventDoubleBooking: true
};
