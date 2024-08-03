import React from 'react'
import LetterTemplate from '../../Template/SummaryTemplate/SummaryTemplate'
import LetterSummary from '../../../summary/LetterSummary'

const letterTitle = LetterSummary.title || '기본 제목'
const letterSummary = LetterSummary.summary || '기본 요약'

function Letter() {
  return (
    <LetterTemplate
      tooltipMessage={'편지를 클릭해주세요'}
      modalTitle={letterTitle}
      MoodalMessage={letterSummary}
      imageUrl={'letter.png'}
      imageAlt={'하이'}
      titleMessage={'하이'}
    />
  )
}

export default Letter
