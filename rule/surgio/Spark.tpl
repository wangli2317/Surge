# NAME: Spark https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/Spark/Spark.list
# AUTHOR: blackmatrix7
# REPO: https://github.com/blackmatrix7/ios_rule_script
# UPDATED: 2023-02-15 23:45:31
# DOMAIN-SUFFIX: 5
# TOTAL: 5
{% macro main(rule) %}
DOMAIN-SUFFIX,amplitude.com,{{ rule }}
DOMAIN-SUFFIX,firebaseio.com,{{ rule }}
DOMAIN-SUFFIX,hockeyapp.net,{{ rule }}
DOMAIN-SUFFIX,readdle.com,{{ rule }}
DOMAIN-SUFFIX,smartmailcloud.com,{{ rule }}
{% endmacro %}
