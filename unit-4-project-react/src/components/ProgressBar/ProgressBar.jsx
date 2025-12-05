

const ProgressBar = ({progress}) => {

  return (
    <div className="progress-bar">
      {/* Task bar is 2  components, who's widths are inverse of 100% from the other. */}
      <div style={{ width: `${progress}%` }}></div>
      <div style={{ width: `${100 - progress}%` }}></div>
    </div>
  )
}

export default ProgressBar