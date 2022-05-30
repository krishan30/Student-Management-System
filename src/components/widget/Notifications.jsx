import "./widget.scss";

const Notifications = ({ type }) => {

  const notifications = [
    { id: 1, notification: 'If Jack Bauer was a Spartan, the movie "300" would have been called "1."' },
    { id: 2, notification: 'If everyone had listened to Jack Bauer the first time, the show would be called "12."' },
    { id: 3, notification: 'Jack Bauer sleeps with a night light because the dark is afraid of Jack Bauer.'},
    { id: 4, notification: 'Jack Bauer is the only reason why Waldo is hiding.' },
    { id: 5, notification: 'When Jack Bauer goes to a blood drive, he doesn\'t use a needle. He asks for a gun and a bucket.' },
    { id: 6, notification: 'There was no best man at Jack Bauer\'s wedding. Jack Bauer is always the best man.' },
    { id: 7, notification: 'If Jack Bauer took a gun and two bullets into a room with Hitler, Stalin, and Nina Myers, he\'d shoot Nina twice.'},
    { id: 8, notification: '1.6 billion Chinese and 146 million Russians are mad at Jack Bauer. Sounds like a fair fight.'}
  ];
  return (
    <div className="widget">
        <span className="title"><p>Latest announcements</p></span>
        <ul>
        {notifications.map(data=>(
          <li key={data.id}><span className="content">{data.notification}</span></li>
        ))}
        </ul>
      </div>
  );
};

export default Notifications;
