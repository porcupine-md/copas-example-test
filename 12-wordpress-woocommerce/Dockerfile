FROM wordpress:6-php8.3-apache
RUN apt-get update && apt-get install -y --no-install-recommends curl unzip \
  && curl -fsSL https://downloads.wordpress.org/plugin/woocommerce.latest-stable.zip -o /tmp/woocommerce.zip \
  && unzip -q /tmp/woocommerce.zip -d /usr/src/wordpress/wp-content/plugins \
  && rm -rf /var/lib/apt/lists/* /tmp/woocommerce.zip

EXPOSE 80
CMD ["apache2-foreground"]
