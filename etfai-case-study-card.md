Macro Name: etfai-case-study-card

Visibility: Visible to all users in the Macro Browser

Macro Title: ETF.AI Case Study Card

Description: ⚠️ Works only in the ETF.AI space ⚠️

Categories: Formatting

Macro Body Processing: No macro body

```
## Macro title: ETF.AI Case Study Card
## Macro has a body: N
## Body processing: No macro body
## Output: HTML
##
## Developed by: Vasily Fomchenko
## Date created: 07/11/2024
## Installed by: Vasily Fomchenko

## @param Title:title=Title|type=string|required=true
## @param Subtitle1:title=Subtitle 1|type=string
## @param Subtitle2:title=Subtitle 2|type=string
## @param ImageURL:title=Image URL|type=string|required=true
## @param LinkTitle:title=Link Title|type=string|required=true
## @param LinkURL:title=Link URL|type=string|required=true
## @param LinkTarget:title=Open in New Tab|type=boolean
## @param CSS:title=CSS Class|type=string

<div class="etfai-case-study-card etfai-case-study-card--v2 $!paramCSS">
    #if ($paramSubtitle1)
        <div class="etfai-case-study-card__subtitle">
            $paramSubtitle1
        </div>
    #end
    <div class="etfai-case-study-card__img">
        <img src="$paramImageURL" alt="$paramTitle" />
    </div>
    #if ($paramSubtitle2)
        <div class="etfai-case-study-card__subtitle">
            $paramSubtitle2
        </div>
    #end
    <div class="etfai-case-study-card__title">
        $paramTitle
    </div>
    <ac:structured-macro ac:name="auibutton">
        <ac:parameter ac:name="class">etfai-case-study-card__link</ac:parameter>
        <ac:parameter ac:name="type">subtle</ac:parameter>
        <ac:parameter ac:name="title">$paramLinkTitle</ac:parameter>
        <ac:parameter ac:name="url">$paramLinkURL</ac:parameter>
        <ac:parameter ac:name="target">$paramLinkTarget</ac:parameter>
    </ac:structured-macro>
</div>
```
