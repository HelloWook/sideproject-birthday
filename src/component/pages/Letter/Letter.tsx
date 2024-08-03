import LetterTemplate from '../../Template/LetterTemplate'

function Letter() {
  return (
    <LetterTemplate
      tooltipMessage={'편지를 클릭해주세요'}
      MoodalMessage={''}
      modalTitel={''}
      imageUrl={'letter.png'}
      imageAlt={'하이'}
      titleMessage={'하이'}
    />
  )
}

export default Letter
