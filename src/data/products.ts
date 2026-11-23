export interface Product {
  name: string;
  status: '개발 중' | '베타' | '출시';
  image: string;
  category: string;
  description: string;
  url?: string;
  repository?: string;
  interestUrl?: string;
  interestLabel: string;
}

export const products: Product[] = [
  {
    image: '/projects/etf.webp',
    name: 'ETF Finder', status: '출시', category: '연금 · 금융 도구',
    description: '퇴직연금(DC·IRP)에서 안전자산으로 100% 매수할 수 있는 국내 ETF를 찾아보세요.',
    url: 'https://etf.aidaon.com/',
    repository: 'https://github.com/antdailycraft/etf-finder',
    interestLabel: '관심 있어요',
  },
  {
    image: '/projects/agora.webp',
    name: 'Agora', status: '개발 중', category: '지식 공유 · 커뮤니티',
    description: '함께 모은 링크와 문서를 AI가 요약하고 주제별로 정리하는 지식 공유 공간입니다.',
    interestLabel: '관심 있어요',
  },
  {
    image: '/projects/dooti.webp',
    name: 'Dooti', status: '개발 중', category: '가족 · Android',
    description: '아이가 취침 시간을 기록하고 스탬프를 모으면, 부모가 웹에서 약속 시간과 기록을 함께 관리하는 가족 습관 앱입니다.',
    interestLabel: '대기자 신청',
  },
];
