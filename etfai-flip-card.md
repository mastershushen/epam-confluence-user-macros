Macro Name: etfai-flip-card

Visibility: Visible to all users in the Macro Browser

Macro Title: ETF.AI Flip Card

Description: ⚠️ Works only in the ETF.AI space ⚠️

Categories: Formatting

Macro Body Processing: Rendered

```
## Macro title: ETF.AI Flip Card
## Macro has a body: Y
## Body processing: Rendered
## Output: HTML
##
## Developed by: Vasily Fomchenko
## Date created: 07/11/2024
## Installed by: Vasily Fomchenko

## @param Color:title=Color|type=enum|enumValues=violet,orange,blue|required=true
## @param Category:title=Category|type=string|required=true
## @param Title:title=Title|type=string|required=true
## @param LinkTitle:title=Link Title|type=string|required=true
## @param LinkURL:title=Link URL|type=string|required=true
## @param LinkTarget:title=Open in New Tab|type=boolean
## @param CSS:title=CSS Class|type=string

<div class="etfai-flip-card etfai-flip-card--v2 $paramCSS">
    <div class="etfai-flip-card__inner">
        <div class="etfai-flip-card__front etfai-flip-card__front--$paramColor">
            <div class="etfai-flip-card__category">
                $paramCategory
            </div>
            <div class="etfai-flip-card__title">
                $paramTitle
            </div>
        </div>
        <div class="etfai-flip-card__back">
            <div class="etfai-flip-card__description">
                $body
            </div>
            <ac:structured-macro ac:name="auibutton">
                <ac:parameter ac:name="class">etfai-flip-card__link</ac:parameter>
                <ac:parameter ac:name="type">subtle</ac:parameter>
                <ac:parameter ac:name="title">$paramLinkTitle</ac:parameter>
                <ac:parameter ac:name="url">$paramLinkURL</ac:parameter>
                <ac:parameter ac:name="target">$paramLinkTarget</ac:parameter>
            </ac:structured-macro>
        </div>
    </div>
</div>
```
