---
title: Using the panels within the labeling interface
short: Panels
tier: all
type: guide
order: 213
order_enterprise: 113
meta_title: Labeling interface
meta_description: How to use the labeling editor in Label Studio
section: "Labeling"
parent: "labeling"
parent_enterprise: "labeling"
date: 2024-02-29 14:41:32
---


## Info panel

This shows information about the selected regions. 

If no regions are selected, the panel is blank. You can select a region by clicking on it in the display portion of the labeling interface, or by clicking a region under the [**Regions** panel](#Regions-panel). 

![Screenshot of Info panel](/images/label/info_panel.png)

!!! note
    Not all annotation types will have information to display in the the Info panel. For example, a ranker task or a task in which you select a choice (but no regions) does not have additional information to display. 

!!! info Tip
    To select multiple regions, press `Ctrl` while selecting regions in the **Regions** panel. 


<table>
<thead>
    <tr>
      <th>Action</th>
      <th>Icon</th>
      <th>Description</th>
    </tr>
</thead>
<tr>
<td>

**Create relation between regions**
</td>
<td>

![Relation icon](/images/label/relation_icon.png)
</td>
<td>

Click this to add a relation between two regions. For more information about regions, see the Regions panel below and [Add relations between regions](labeling#Add-relations-between-regions). 

</td>
</tr>
<tr>
<td>

**Edit selected region meta**
</td>
<td>

![Meta icon](/images/label/meta_icon.png)
</td>
<td>

Modify the metadata of a selected region within a task. Metadata can include additional information about the region, such as attributes, tags, or comments that provide context or classification details beyond the basic label. 

This action is useful for refining data annotations, correcting errors, or adding notes that can be used for machine learning model training or further data analysis.

</td>
</tr>
<tr>
<td>

**Show/hide**
</td>
<td>

![Hide icon](/images/label/hide_icon.png)
</td>
<td>

Toggle this to show or hide the region in the display portion of the interface, without deleting or otherwise affecting the region. This is useful when you are trying to add multiple overlapping regions. 

</td>
</tr>
<tr>
<td>

**Delete**
</td>
<td>

![Delete icon](/images/label/delete_icon.png)
</td>
<td>

Delete the selected region. 

If you accidentally delete a region, press `ctrl` + `z` or click **Undo** in the actions at the bottom of the labeling interface. 

</td>
</tr>
</table>

### Use the Info panel to refine a region

For some region types, you can finely tune a region by editing its values. 

For example, if you are adding a rectangle, you can modify its coordinates and rotation from the info panel:

<video src="../images/label/info_edit.mp4" controls="controls" style="max-width: 800px;" class="gif-border" />

<div class="enterprise-only">

## Comments panel

Use this section to leave comments. Reviewers and administrators get notifications about comments. 

For more information, see [Comments and notifications](comments_notifications). 

</div>

## History panel

This panel displays the annotation history as it progresses through the creation and review process. 

## Regions panel

A region is an area within the data that you as identify as an annotator. For example, this can be a box that you draw on an image, a section of highlighted text, highlighted video segments, and so on. 

Not all tasks require regions. For example, a ranker task, classification tasks, or a task in which you select an option from multiple choices does not require you to create regions. In those cases, the **Regions** panel is empty. 

![Regions panel](/images/label/regions_panel.png)

For information about adding regions, see [Labeling regions](labeling#Labeling-regions). 

#### Actions

* Select a region to display it in the **Info** panel. 
* Click the lock icon to lock a region. You cannot modify the region until it is unlocked. For complex regions, this can help prevent you from making unintentional changes. 
* Click show/hide to control whether the region is visible in the display portion of the labeling interface. This can be useful when you are adding multiple overlapping regions. 
* With a region selected, press `backspace` to delete the region. 

#### Grouping

For complex annotation tasks in which you have multiple regions, you can use the grouping options to better manage the regions list. 

* **Group Manually**--You can organize regions by dragging and dropping them within the regions panel. This is useful for grouping related regions together according to your specific needs.
* **Group by Tool**--If you are using different annotation tools, it might be helpful to group regions by the tools that you used. 
* **Group by Label**--Group regions that have the same label. 

![Regions panel gif](/images/label/regions_panel.gif)

!!! note
    If you are using [predictions](predictions), you will also see an icon indicating which regions have been generated using a prediction. 

#### Ordering

If you are using the **Group Manually** option, you can order regions as follows:

* **Order by Time**: Regions are ordered by when they were added. This is the default. 
* **Order by Score**: If there is a scoring method present such as a confidence score or a quality rating, then the regions are ordered by score. These are typically only present if you are using an ML backend. 


!!! note
    The order and grouping that you apply does not affect the underlying data and does not change how the annotations are exported. It is simply for your convenience when working in the labeling interface. 

## Relations panel

This panel lists any relations you have added between regions. For information on adding a relation, see [Add relations between annotations](labeling#Add-relations-between-regions). 

A relation indicates a connection between two regions, such as a hierarchy or order. These are often added in NLP tasks. 

![Relations panel screenshot](/images/label/relations.png)

You can use the **Relations** panel to delete relations and hide relations. Click the arrows between the relations to change the direction. They can be unidirectional or bidirectional arrows. 

![Relations panel gif](/images/label/relations_panel.gif)


## Customize your panel layout

You can customize your panel layout:

* Click the arrows to collapse/expand panel groups or the entire side pane. 
* Drag and drop the panel tab title to reorder panels within the side pane. 
* Use drag and drop for a panel group to undock them from the side and move them around your screen. 

<video src="../images/label/panel_arrange.mp4" controls="controls" style="max-width: 800px;" class="gif-border" />
