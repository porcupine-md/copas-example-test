FROM composer:2 AS vendor
WORKDIR /app
COPY composer.json composer.lock ./
# intl is installed in the runtime image below; Composer only installs here.
RUN composer install --no-dev --prefer-dist --no-interaction --no-progress --optimize-autoloader \
    --ignore-platform-req=ext-intl

FROM php:8.4-cli-alpine
WORKDIR /var/www/html
RUN apk add --no-cache icu-libs \
    && apk add --no-cache --virtual .build-deps icu-dev $PHPIZE_DEPS \
    && docker-php-ext-install pdo_mysql intl \
    && apk del .build-deps
COPY --from=vendor /app/vendor ./vendor
COPY . .
RUN php artisan package:discover --ansi && chmod +x docker-entrypoint.sh && chown -R www-data:www-data storage bootstrap/cache
USER www-data
EXPOSE 8000
ENTRYPOINT ["./docker-entrypoint.sh"]
