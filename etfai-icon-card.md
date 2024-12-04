Macro Name: etfai-icon-card

Visibility: Visible to all users in the Macro Browser

Macro Title: ETF.AI Icon Card

Description: ⚠️ Works only in the ETF.AI space ⚠️

Categories: Formatting

Macro Body Processing: No macro body

```
## Macro title: ETF.AI Icon Card
## Macro has a body: N
## Body processing: No macro body
## Output: HTML
##
## Developed by: Vasily Fomchenko
## Date created: 14/11/2024
## Installed by: Vasily Fomchenko

## @param Title:title=Title|type=string|required=true
## @param ImageURL:title=Image URL|type=string|required=true
## @param Color:title=Color|type=enum|enumValues=violet,twilight,galaxy,spring,sunset|required=true
## @param LinkTitle:title=Link Title|type=string|required=true
## @param LinkURL:title=Link URL|type=string|required=true
## @param LinkTarget:title=Open in New Tab|type=boolean
## @param CSS:title=CSS Class|type=string

<div class="etfai-icon-card etfai-icon-card--v3 $!paramCSS">
    <div class="etfai-icon-card__inner etfai-icon-card__inner--$paramColor">
        <div class="etfai-icon-card__img">
            <img src="$paramImageURL" alt="$paramTitle" />
        </div>
    </div>
    <div class="etfai-icon-card__title">
        $paramTitle
    </div>
    <ac:structured-macro ac:name="auibutton">
        <ac:parameter ac:name="class">etfai-icon-card__link</ac:parameter>
        <ac:parameter ac:name="type">subtle</ac:parameter>
        <ac:parameter ac:name="title">$paramLinkTitle</ac:parameter>
        <ac:parameter ac:name="url">$paramLinkURL</ac:parameter>
        <ac:parameter ac:name="target">$paramLinkTarget</ac:parameter>
    </ac:structured-macro>
</div>
```
