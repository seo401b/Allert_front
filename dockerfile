# 1. Node.js 이미지
FROM node:18

# 2. 작업 디렉토리 설정
WORKDIR /app

# 3. package.json 복사 및 의존성 설치
COPY package*.json ./
RUN npm install

# 4. 전체 복사 후 빌드
COPY . .
RUN npm run build

# 5. 포트 지정 및 실행
EXPOSE 3000
CMD ["npm", "start"]
