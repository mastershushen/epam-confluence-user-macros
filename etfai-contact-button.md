Macro Name: etfai-contact-button

Visibility: Visible to all users in the Macro Browser

Macro Title: ETF.AI Contact Button

Description: ⚠️ Works only in the ETF.AI space ⚠️

Categories: Formatting

Macro Body Processing: No macro body

```
## Macro title: ETF.AI Contact Button
## Macro has a body: N
## Body processing: No macro body
## Output: HTML
##
## Developed by: Vasily Fomchenko
## Date created: 18/11/2024
## Installed by: Vasily Fomchenko

## @param ImageURL:title=Image URL|type=string|required=true
## @param LinkTitle:title=Link Title|type=string|required=true
## @param LinkURL:title=Link URL|type=string|required=true
## @param LinkTarget:title=Open in New Tab|type=boolean
## @param CSS:title=CSS Class|type=string

<div class="etfai-contact-button etfai-contact-button--v2 $!paramCSS">
    <div class="etfai-contact-button__img">
        <img src="$paramImageURL" alt="$paramLinkTitle" />
    </div>
    <ac:structured-macro ac:name="auibutton">
        <ac:parameter ac:name="class">etfai-contact-button__link</ac:parameter>
        <ac:parameter ac:name="type">subtle</ac:parameter>
        <ac:parameter ac:name="title">$paramLinkTitle</ac:parameter>
        <ac:parameter ac:name="url">$paramLinkURL</ac:parameter>
        <ac:parameter ac:name="target">$paramLinkTarget</ac:parameter>
    </ac:structured-macro>
</div>
```
