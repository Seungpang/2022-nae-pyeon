package com.woowacourse.naepyeon.service.dto;

import com.woowacourse.naepyeon.domain.Message;
import com.woowacourse.naepyeon.domain.Team;
import com.woowacourse.naepyeon.domain.rollingpaper.Rollingpaper;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Getter
public class WrittenMessageResponseDto {

    private Long id;
    private Long rollingpaperId;
    private String rollingpaperTitle;
    private Long teamId;
    private String teamName;
    private String content;
    private String color;
    private String to;

    public static WrittenMessageResponseDto of(
            final Rollingpaper rollingpaper, final Team team,
            final String addresseeNickName, final Message message
    ) {
        return new WrittenMessageResponseDto(
                message.getId(),
                rollingpaper.getId(),
                rollingpaper.getTitle(),
                team.getId(),
                team.getName(),
                message.getContent(),
                message.getColor(),
                addresseeNickName
        );
    }
}
