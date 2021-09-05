import './Need.css'

const Need = ({ pointOfContact, title, description, date, startTime, endTime, zipCode, supporters }) => {
  return (
    <div className="need-container">
      <div className="need-info">
        <h4>{title}</h4>
        <p className="bold">Details:</p>
        <p>{description}</p>
        <p className="bold">{zipCode}</p>
        <p>{date}</p>
      </div>
      <div className="time-container">
        <p>{startTime} - </p>
        <p>{endTime}</p>
      </div>
      <div className="need-info">
        <p className="bold">Volunteers Needed:</p>
        <p>{supporters}</p>
      </div>
      <div className="button-container">
        <a href={`mailto:${pointOfContact}?subject=${title}`}><button className="volunteer-button">Volunteer</button></a>
      </div>
    </div>
   );
}

export default Need;
