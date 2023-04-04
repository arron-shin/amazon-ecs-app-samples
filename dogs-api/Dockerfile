# 사용할 Node.js 버전 선택
FROM node:17-slim

# 작업 디렉토리 생성
WORKDIR /app

# 애플리케이션 종속성 설치
COPY package*.json ./
RUN npm install

# 소스 코드 복사
COPY . .

# 포트 설정
EXPOSE 3000

# 컨테이너 실행 명령어
CMD [ "npm", "start" ]
