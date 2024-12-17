Macro Name: etfai-info-card

Visibility: Visible to all users in the Macro Browser

Macro Title: ETF.AI Info Card

Description: ⚠️ Works only in the ETF.AI space ⚠️

Categories: Formatting

Macro Body Processing: Rendered

```
## Macro title: ETF.AI Info Card
## Macro has a body: Y
## Body processing: Rendered
## Output: HTML
##
## Developed by: Vasily Fomchenko
## Date created: 17/12/2024
## Installed by: Vasily Fomchenko

## @param Title:title=Title|type=string|required=true
## @param Size:title=Size|type=enum|enumValues=md,xs,sm,lg|required=true
## @param CSS:title=CSS Class|type=string

<div class="etfai-info-card etfai-info-card--v1 etfai-info-card--$paramSize $!paramCSS">
    <div class="etfai-info-card__title">
        $paramTitle
    </div>
    <div class="etfai-info-card__description">
        $body
    </div>
</div>
```
