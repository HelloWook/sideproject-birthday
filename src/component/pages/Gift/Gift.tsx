import React from 'react'
import SummaryTemplate from '../../Template/SummaryTemplate/SummaryTemplate'
import GiftSummary from '../../../summary/GiftSummary'

const GitfTitle = GiftSummary.title || '기본 제목'
const GitfSummary = GiftSummary.summary || '기본 요약'

function Gift() {
  return (
    <SummaryTemplate
      tooltipMessage={'선물을 클릭해주세요'}
      modalTitle={GitfTitle}
      MoodalMessage={GitfSummary}
      imageUrl={'gift.png'}
      imageAlt={'하이'}
      titleMessage={'선물 개봉'}
    />
  )
}

export default Gift
