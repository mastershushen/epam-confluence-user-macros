Macro Name: etfai-card

Visibility: Visible to all users in the Macro Browser

Macro Title: ETF.AI Card

Description: ⚠️ Works only in the ETF.AI space ⚠️

Categories: Formatting

Macro Body Processing: Rendered

```
## Macro title: ETF.AI Card
## Macro has a body: Y
## Body processing: Rendered
## Output: HTML
##
## Developed by: Vasily Fomchenko
## Date created: 07/11/2024
## Installed by: Vasily Fomchenko

## @param Title:title=Title|type=string|required=true
## @param LinkTitle:title=Link Title|type=string|required=true
## @param LinkURL:title=Link URL|type=string|required=true
## @param LinkTarget:title=Open in New Tab|type=boolean

<div class="etfai-card etfai-card--v1">
    <div class="etfai-card__title">
        $paramTitle
    </div>
    <div class="etfai-card__description">
        $body
    </div>
    <div class="etfai-card__link-title">
        $paramLinkTitle
    </div>
    <ac:structured-macro ac:name="auibutton">
        <ac:parameter ac:name="class">etfai-card__link</ac:parameter>
        <ac:parameter ac:name="type">subtle</ac:parameter>
        <ac:parameter ac:name="title">$paramLinkTitle</ac:parameter>
        <ac:parameter ac:name="url">$paramLinkURL</ac:parameter>
        <ac:parameter ac:name="target">$paramLinkTarget</ac:parameter>
    </ac:structured-macro>
</div>
```
