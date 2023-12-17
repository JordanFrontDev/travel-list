export default function Stats({ items }) {
  // conditional early return
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPackedItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything ready to go"
          : `👜 You have ${numItems} items on your list and you already packed
        ${numPackedItems} (${percentage})%
        `}
      </em>
    </footer>
  );
}
