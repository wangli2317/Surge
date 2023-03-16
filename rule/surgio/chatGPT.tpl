# OpenAI https://raw.githubusercontent.com/wgetnz/chatgpt-openclash/main/chatgpt.list
{% macro main(rule) %}
DOMAIN-SUFFIX,openai.com,{{ rule }}
DOMAIN-SUFFIX,chat.openai.com,{{ rule }}
DOMAIN-SUFFIX,challenges.cloudflare.com,{{ rule }}
DOMAIN-SUFFIX,auth0.openai.com,{{ rule }}
DOMAIN-SUFFIX,platform.openai.com,{{ rule }}
# Add ai.com
DOMAIN-SUFFIX,ai.com,{{ rule }}
{% endmacro %}
