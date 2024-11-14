Macro Name: etfai-small-card

Visibility: Visible to all users in the Macro Browser

Macro Title: ETF.AI Small Card

Description: ⚠️ Works only in the ETF.AI space ⚠️

Categories: Formatting

Macro Body Processing: No macro body

```
## Macro title: ETF.AI Small Card
## Macro has a body: N
## Body processing: No macro body
## Output: HTML
##
## Developed by: Vasily Fomchenko
## Date created: 14/11/2024
## Installed by: Vasily Fomchenko

## @param Type:title=Type|type=enum|enumValues=link,download|required=true
## @param Title:title=Title|type=string|required=true
## @param ImageURL:title=Image URL|type=string|required=true
## @param Time:title=Time|type=string
## @param LinkTitle:title=Link Title|type=string|required=true
## @param LinkURL:title=Link URL|type=string|required=true
## @param LinkTarget:title=Open in New Tab|type=boolean

<div class="etfai-small-card etfai-small-card--$paramType etfai-small-card--v1">
    <div class="etfai-small-card__inner">
        <div class="etfai-small-card__img">
            <img src="$paramImageURL" alt="$paramTitle" />
        </div>
        #if ($paramTime)
            <div class="etfai-small-card__time">
                $paramTime
            </div>
        #end
    </div>
    <div class="etfai-small-card__title">
        $paramTitle
    </div>
    <ac:structured-macro ac:name="auibutton">
        <ac:parameter ac:name="class">etfai-small-card__link</ac:parameter>
        <ac:parameter ac:name="type">subtle</ac:parameter>
        <ac:parameter ac:name="title">$paramLinkTitle</ac:parameter>
        <ac:parameter ac:name="url">$paramLinkURL</ac:parameter>
        <ac:parameter ac:name="target">$paramLinkTarget</ac:parameter>
    </ac:structured-macro>
</div>
```
