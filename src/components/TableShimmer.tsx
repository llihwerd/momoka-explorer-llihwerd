import React, { useMemo } from 'react';

const TableShimmer = () => {
  const txns = useMemo(() => Array(10).fill(1), []);

  return (
    <div className="animate-pulse space-y-3 py-3">
      {txns.map((txn) => (
        <div key={txn} className="h-20 rounded-xl bg-white" />
      ))}
    </div>
  );
};

export default TableShimmer;
