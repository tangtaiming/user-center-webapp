## 指定基础镜像
FROM nginx

WORKDIR /data/app

USER root

## 复制nginx 配置文件覆盖已有文件
COPY docker/nginx.conf /etc/nginx/nginx.conf
COPY ./dist.tar.gz /data/app

## 解压到指定目录 -C 指定目标目录
RUN tar -vzxf /data/app/dist.tar.gz
RUN mv /data/app/dist /data/app/user-center-webapp

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
