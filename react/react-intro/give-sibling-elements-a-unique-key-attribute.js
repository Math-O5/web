const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue',
  'React',
];

function Frameworks() {
  const renderFrameworks = frontEndFrameworks.
  filter((frame, index) => {
    return (frontEndFrameworks.indexOf(frame) === index)
  }).map((frame, index) => {
    return <li key={index}>{frame}</li>
  });

  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>
        {renderFrameworks}
      </ul>
    </div>
  );
};
