# Apple News https://raw.githubusercontent.com/VirgilClyne/iRingo/main/RuleSet/News.list

{% macro main(rule) %}
# > iCloud
DOMAIN-SUFFIX,gateway.icloud.com,{{ rule }}

# > News
DOMAIN-SUFFIX,news-edge.apple.com,{{ rule }}
DOMAIN-SUFFIX,news-events.apple.com,{{ rule }}
DOMAIN-SUFFIX,apple.comscoreresearch.com,{{ rule }}
# News+ Audio
URL-REGEX,^https?:\/\/news-assets\.apple\.com\/(audio-narrative|podcast\/audio)\/.*,{{ rule }}

{% endmacro %}
