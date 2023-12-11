export default function Counter({ numberOfItemsPacked, totalNumberOfItems }) {
  return (
    <div>
      <b>{numberOfItemsPacked}</b> / {totalNumberOfItems} items packed
    </div>
  );
}
