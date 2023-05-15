const Converter = ({ to, value }) => {

  const result = to === 'C'
        ? Math.round((value * 9 / 5) + 32)
        : Math.round((value - 32) * 5 / 9)

  return (
    <div className="converter">
      <output className="result" htmlFor="amount">{String(result)}</output>
    </div>
  )
}

export default Converter
