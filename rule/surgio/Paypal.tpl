# > PayPal https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Ruleset/Extra/PayPal.list
{% macro main(rule) %}
USER-AGENT,PayPal*{{ rule }}
DOMAIN-SUFFIX,paypal.com{{ rule }}
DOMAIN-SUFFIX,paypal.me{{ rule }}
DOMAIN-SUFFIX,paypal-mktg.com{{ rule }}
DOMAIN-SUFFIX,paypalobjects.com{{ rule }}
{% endmacro %}
