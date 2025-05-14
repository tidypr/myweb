'use client';

export default function error({ error }: { error: Error }) {
  return (
    <>
      <h1>error</h1>
      <h2>{error.message}</h2>
      <h3>{error.name}</h3>
    </>
  );
}
