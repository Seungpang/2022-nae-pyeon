package com.woowacourse.naepyeon.controller.dto;

import javax.validation.constraints.NotBlank;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Getter
public class TeamUpdateRequest {

    @NotBlank(message = "4001:모임 이름은 공백일 수 없습니다.")
    private String name;
}
