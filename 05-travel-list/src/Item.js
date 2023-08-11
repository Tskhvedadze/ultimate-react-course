function Item({ item, deleteItem, toggleItems }) {
  return (
    <li>
      <input
        type='checkbox'
        value={item.packed}
        onChange={() => toggleItems(item.id)}
      />
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => deleteItem(item.id)}>❌</button>
    </li>
  )
}

export default Item
