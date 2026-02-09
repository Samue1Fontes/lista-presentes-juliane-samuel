import { FaCalendarAlt } from 'react-icons/fa';

export default function GoogleCalendarButton() {
  return (
    <a
      href="https://www.google.com/calendar/render?action=TEMPLATE&text=Nosso+Ch%C3%A1+-+Juliane+%26+Samuel&dates=20260307T160000/20260307T200000&details=Venha+celebrar+conosco+no+Realize+Recep%C3%A7%C3%B5es&location=Realize+Recep%C3%A7%C3%B5es+-+R.+Rainha+do+Mar,+440A+-+Felipe+Camar%C3%A3o,+Natal+-+RN,+59074-150&color=8&trp=false"
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
