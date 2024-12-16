import React from 'react'
import { DndContext, useDraggable, useDroppable, DragOverlay } from '@dnd-kit/core'

function ShoppingCart() {
  const [activeId, setActiveId] = React.useState(null)

  return (
    <DndContext
      onDragStart={(event) => setActiveId(event.active.id)}
      onDragEnd={(event) => {
        setActiveId(null) // Dừng kéo
        const { over } = event
        if (over) {
          console.log(`Dropped on ${over.id}`)
        } else {
          console.log('Dropped outside')
        }
      }}
      onDragCancel={() => setActiveId(null)}
    >
      <div style={{ display: 'flex', gap: '20px' }}>
        <Product id="product1" name="Sản phẩm 1" />
        <Cart />
      </div>

      {/* Drag Overlay */}
      <DragOverlay>
        {activeId ? <Product id={activeId} name={`Đang kéo: ${activeId}`} isDragging /> : null}
      </DragOverlay>
    </DndContext>
  )
}

function Product({ id, name, isDragging }) {
  const { attributes, listeners, setNodeRef } = useDraggable({ id })

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{
        padding: '10px',
        background: isDragging ? 'lightgreen' : 'lightblue',
        cursor: 'grab',
        opacity: isDragging ? 0.7 : 1,
      }}
    >
      {name}
    </div>
  )
}

function Cart() {
  const { setNodeRef } = useDroppable({ id: 'cart' })

  return (
    <div
      ref={setNodeRef}
      style={{
        width: '200px',
        height: '200px',
        background: 'lightgray',
        textAlign: 'center',
        lineHeight: '200px',
        border: '2px dashed black',
      }}
    >
      Thả vào đây
    </div>
  )
}

export default ShoppingCart
