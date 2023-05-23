import React from 'react';
import calculateMonthlyItemCount from '../util/calculateMonthlyItemCount';

export default function AuditForm() {
  return (
    <React.Fragment>
      <h1 style={{ color: 'green' }}>Audit Form Component</h1>
      <h2>{calculateMonthlyItemCount()}</h2>
    </React.Fragment>
  );
}
