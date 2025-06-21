## 指定基础镜像
FROM nginx

WORKDIR /www/wwwroot/data/app/user-center-webapp

USER root

## 复制nginx 配置文件覆盖已有文件
COPY ./www/wwwroot/data/app/frontend/nginx.conf /usr/local/nginx/conf/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
