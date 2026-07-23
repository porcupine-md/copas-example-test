FROM composer:2 AS vendor

WORKDIR /app
COPY composer.json composer.lock ./
RUN composer install --no-dev --prefer-dist --no-interaction --no-progress --no-scripts --optimize-autoloader

FROM php:8.4-cli-alpine

WORKDIR /var/www/html
RUN docker-php-ext-install pdo_mysql

COPY --from=vendor /app/vendor ./vendor
COPY . .
RUN php artisan package:discover --ansi \
    && chmod +x docker-entrypoint.sh \
    && chown -R www-data:www-data storage bootstrap/cache

USER www-data
EXPOSE 8000
ENTRYPOINT ["./docker-entrypoint.sh"]
