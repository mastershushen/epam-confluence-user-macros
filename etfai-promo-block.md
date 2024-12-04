Macro Name: etfai-promo-block

Visibility: Visible to all users in the Macro Browser

Macro Title: ETF.AI Promo Block

Description: ⚠️ Works only in the ETF.AI space ⚠️

Categories: Formatting

Macro Body Processing: Rendered

```
## Macro title: ETF.AI Promo Block
## Macro has a body: Y
## Body processing: Rendered
## Output: HTML
##
## Developed by: Vasily Fomchenko
## Date created: 14/11/2024
## Installed by: Vasily Fomchenko

## @param Title:title=Title|type=string
## @param Subtitle:title=Subtitle|type=string
## @param CSS:title=CSS Class|type=string

<div class="etfai-promo-block etfai-promo-block--v3 $paramCSS">
    #if ($paramSubtitle)
        <div class="etfai-promo-block__subtitle">
            $paramSubtitle
        </div>
    #end
    #if ($paramTitle)
        <div class="etfai-promo-block__title">
            $paramTitle
        </div>
    #end
    <div class="etfai-promo-block__description">
        $body
    </div>
</div>
```
