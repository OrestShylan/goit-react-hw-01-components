import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  console.log({ stats });
  return (
    <section>
      {title && <h2>{title}</h2>}
      <h2 class="title">Upload stats</h2>
      <ul>
        {stats.map(stat => {
          return (
            <li key={stat.id}>
              <span>{stat.label}</span>
              <span>{stat.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
export default Statistics;
