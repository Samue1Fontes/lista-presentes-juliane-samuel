import { FaCalendarAlt } from 'react-icons/fa';

export default function GoogleCalendarButton() {
  return (
    <a
      href="https://www.google.com/calendar/render?action=TEMPLATE&text=Nosso+Chá+-+Juliane+%26+Samuel&dates=20260307T160000/20260307T200000&details=Venha+celebrar+conosco+no+Flor+%26+Flor!&location=Rua+Humberto+Monte,+1855,+Capim+Macio,+Natal+-+RN&color=8&trp=false"
      target="_blank"
      rel="noopener noreferrer"
      className="btn-primary"
      style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
        gap: '0.5rem',
        textDecoration: 'none',
        marginTop: '1rem',
        marginBottom: '1rem'
      }}
    >
      <FaCalendarAlt />
      Adicionar ao Google Agenda
    </a>
  );
}
