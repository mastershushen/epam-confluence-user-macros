Macro Name: etfai-banner

Visibility: Visible to all users in the Macro Browser

Macro Title: ETF.AI Banner

Description: ⚠️ Works only in the ETF.AI space ⚠️

Categories: Formatting

Macro Body Processing: Rendered

```
## Macro title: ETF.AI Banner
## Macro has a body: Y
## Body processing: Rendered
## Output: HTML
##
## Developed by: Vasily Fomchenko
## Date created: 02/12/2024
## Installed by: Vasily Fomchenko

## @param Color:title=Color|type=enum|enumValues=violet,orange,blue|required=true
## @param Align:title=Align|type=enum|enumValues=left,center,right|required=true
## @param LinkTitle:title=Link Title|type=string|required=true
## @param LinkURL:title=Link URL|type=string|required=true
## @param LinkTarget:title=Open in New Tab|type=boolean
## @param CSS:title=CSS Class|type=string

<div class="etfai-banner etfai-banner--v2 etfai-banner--$paramColor etfai-banner--$paramAlign $!paramCSS">
    <div>
        $body
    </div>
    <div>
        <ac:structured-macro ac:name="auibutton">
            <ac:parameter ac:name="class">etfai-button etfai-button--lg</ac:parameter>
            <ac:parameter ac:name="type">standard</ac:parameter>
            <ac:parameter ac:name="title">$paramLinkTitle</ac:parameter>
            <ac:parameter ac:name="url">$paramLinkURL</ac:parameter>
            <ac:parameter ac:name="target">$paramLinkTarget</ac:parameter>
        </ac:structured-macro>
    </div>
</div>
```
