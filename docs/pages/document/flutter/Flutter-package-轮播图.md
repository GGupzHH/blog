---
title: flutter使用轮播图插件
date: '2023-02-22 10:36:05'
sidebar: 'auto'
categories:
 - Flutter
 - Flutter-Package
tags:
 - Flutter
 - Flutter-Package
---


flutter配置轮播图。
<!-- more -->

# [carousel_slider](https://pub.dev/packages/carousel_slider)

### version: 4.2.1

### CarouselSlider 是 carousel_slider 插件提供的一个轮播图组件。该组件可以实现一些常见的轮播图效果，例如无限循环、手势滑动、自动播放等。下面是这些参数的具体说明：
  ```dart
    {
      items：轮播图中的子项列表。
      options：控制轮播图效果的选项，包括以下属性：
        height：轮播图的高度。
        aspectRatio：轮播图的宽高比。
        viewportFraction：每个子项的宽度占轮播图宽度的比例，取值范围为 0.0 到 1.0。
        initialPage：初始显示的子项的索引。
        enableInfiniteScroll：是否启用无限循环。
        reverse：是否反向轮播。
        autoPlay：是否自动播放。
        autoPlayInterval：自动播放间隔时间。
        autoPlayAnimationDuration：自动播放切换的动画时间。
        autoPlayCurve：自动播放切换的动画曲线。
        enlargeCenterPage：是否放大当前选中的子项。
        enlargeFactor：当前选中的子项放大的比例。
        onPageChanged：当子项切换时的回调函数。
        scrollDirection：轮播图滚动的方向，可以是水平或垂直方向。
    }
  ```

### 使用
  ```dart
    CarouselSlider(
      options: CarouselOptions(
        height: 130.0,
        viewportFraction: 1,
        autoPlay: true
      ),
      items: carouselImgUriList.map((item) {
        return Builder(
          builder: (BuildContext context) {
            return SizedBox(
              width: MediaQuery.of(context).size.width,
              child: Image.network(
                item['userPhoto'],
                fit: BoxFit.fill,
              )
            );
          },
        );
      }).toList(),
    )
  ```