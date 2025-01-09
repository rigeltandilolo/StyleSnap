const Card = () => {
  return (
    <div
      className="card bg-white rounded-lg p-2 mx-auto h-fit"
      style={{
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
        margin: "1px",
        transform: "scale(0.95)",
        transition: "transform 0.3s ease",
      }}
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-32 object-contain rounded-md"
          style={{
            objectFit: "contain",
          }}
        />
      )}
      <div className="card-title text-sm font-semibold">{title}</div>
      <div className="card-content text-gray-600 text-xs">{content}</div>
    </div>
  )
}

export default Card