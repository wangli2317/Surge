# 🌐 ASN for Telegram Messenger Inc https://raw.githubusercontent.com/VirgilClyne/GetSomeFries/main/ruleset/ASN.Telegram.list

{% macro main(rule) %}
PROCESS-NAME,org.telegram.messenger,{{ rule }}
DOMAIN-SUFFIX,comments.app,{{ rule }} // @CommentsBot
DOMAIN-SUFFIX,t.me,{{ rule }}
DOMAIN-SUFFIX,tdesktop.com,{{ rule }}
DOMAIN-SUFFIX,telegra.ph,{{ rule }} // Telegraph
DOMAIN-SUFFIX,telegram.me,{{ rule }}
DOMAIN-SUFFIX,telegram.org,{{ rule }}
DOMAIN-SUFFIX,telegram-cdn.org,{{ rule }}
DOMAIN-SUFFIX,telesco.pe,{{ rule }} // Telescope
IP-CIDR,109.239.140.0/24,no-resolve // Telegram Messenger LLP
IP-CIDR,5.28.192.0/18,no-resolve // IPFFM - Internet Provider Frankfurt GmbH
IP-CIDR6,2a0a:f280::/32,no-resolve
IP-ASN,44907,no-resolve // Telegram Messenger Inc
IP-ASN,62014,no-resolve // Telegram Messenger Inc
IP-ASN,62041,no-resolve // Telegram Messenger Inc
IP-ASN,59930,no-resolve // Telegram Messenger Inc
IP-ASN,211157,no-resolve // Telegram Messenger Inc
{% endmacro %}
