import React, { lazy, Suspense } from 'react';

const LazyProfileMainCard = lazy(() => import('./ProfileMainCard'));

const ProfileMainCard = props => (
  <Suspense fallback={null}>
    <LazyProfileMainCard {...props} />
  </Suspense>
);

export default ProfileMainCard;
