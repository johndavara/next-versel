import { FC, PropsWithChildren } from "react";

const Darklayout : FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: '5px',
        padding: '10px'
      }}
    >
      <h3>Darklayout</h3>
      <div>
        {children}
      </div>
    </div>
  )
}

export default Darklayout;