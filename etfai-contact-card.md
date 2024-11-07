Macro Name: etfai-contact-card
Visibility: Visible to all users in the Macro Browser
Macro Title: ETF.AI Contact Card
Description: ⚠️ Works only in the ETF.AI space ⚠️
Categories: Formatting
Macro Body Processing: Rendered

```
## Macro title: ETF.AI Contact Card
## Macro has a body: Y
## Body processing: Rendered
## Output: HTML
##
## Developed by: Vasily Fomchenko
## Date created: 07/11/2024
## Installed by: Vasily Fomchenko

## @param Title:title=Title|type=string|required=true
## @param ImageURL:title=Image URL|type=string|required=true
## @param LinkTitle:title=Link Title|type=string|required=true
## @param LinkURL:title=Link URL|type=string|required=true
## @param LinkTarget:title=Open in New Tab|type=boolean

<div class="etfai-contact-card etfai-contact-card--v1">
    <div class="etfai-contact-card__img">
        <img src="$paramImageURL" alt="$paramTitle" />
    </div>
    <div class="etfai-contact-card__title">
        $paramTitle
    </div>
    <div class="etfai-contact-card__description">
        $body
    </div>
    <ac:structured-macro ac:name="auibutton">
        <ac:parameter ac:name="class">etfai-contact-card__link</ac:parameter>
        <ac:parameter ac:name="type">subtle</ac:parameter>
        <ac:parameter ac:name="title">$paramLinkTitle</ac:parameter>
        <ac:parameter ac:name="url">$paramLinkURL</ac:parameter>
        <ac:parameter ac:name="target">$paramLinkTarget</ac:parameter>
    </ac:structured-macro>
</div>
```
