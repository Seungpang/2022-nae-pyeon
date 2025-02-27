package com.woowacourse.naepyeon.repository;

import com.woowacourse.naepyeon.domain.Member;
import com.woowacourse.naepyeon.domain.Team;
import com.woowacourse.naepyeon.domain.TeamParticipation;
import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface TeamParticipationRepository {

    Long save(final TeamParticipation teamParticipation);

    Optional<TeamParticipation> findById(final Long id);

    Optional<Member> findMemberByMemberIdAndTeamId(final Long memberId, final Long teamId);

    List<TeamParticipation> findByTeamId(final Long teamId);

    List<Team> findTeamsByMemberId(final Long memberId);

    Page<Team> findTeamsByMemberIdAndPageRequest(final Long memberId, final Pageable pageRequest);

    String findNicknameByMemberIdAndTeamId(final Long memberId, final Long teamId);

    List<String> findAllNicknamesByTeamId(final Long teamId);

    boolean isJoinedMember(final Long memberId, final Long teamId);

    void updateNickname(final String newNickname, final Long memberId, final Long teamId);
}
